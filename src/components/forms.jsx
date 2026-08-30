import { useState } from 'react';
import { Send, CheckCircle, Mail, MessageSquare, User, Sparkles, Loader2 } from 'lucide-react';
import styles from './forms.module.css';

export function Forms() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // Direct background email delivery to user's email
      const response = await fetch("https://formsubmit.co/ajax/leite.luizhenrique94@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Novo contato de ${formData.name} via Portfólio`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Falha no envio da API');
      }
    } catch (err) {
      // Graceful fallback to mailto if offline or blocked
      const subject = encodeURIComponent(`Contato de ${formData.name} via Portfólio`);
      const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
      window.location.href = `mailto:leite.luizhenrique94@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };


  return (
    <div className={styles.contactContainer}>
      <div className={styles.formCard}>
        <div className={styles.cardHeader}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Vamos Conversar</span>
          </div>
          <h3 className={styles.title}>Envie uma Mensagem</h3>
          <p className={styles.subtitle}>
            Tem um projeto em mente ou deseja trocar uma ideia? Preencha os campos abaixo.
          </p>
        </div>

        {submitted ? (
          <div className={styles.successState}>
            <CheckCircle size={48} className={styles.successIcon} />
            <h4>Mensagem enviada com sucesso!</h4>
            <p>Obrigado pelo contato. Responderei o mais breve possível.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <User size={18} className={styles.fieldIcon} />
              <input
                type="text"
                placeholder="Seu Nome Completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <Mail size={18} className={styles.fieldIcon} />
              <input
                type="email"
                placeholder="Seu Melhor E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className={`${styles.inputGroup} ${styles.textareaGroup}`}>
              <MessageSquare size={18} className={styles.fieldIcon} />
              <textarea
                placeholder="Descreva seu projeto ou mensagem..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                <>
                  <span>Enviando mensagem...</span>
                  <Loader2 size={18} className={styles.spinner} />
                </>
              ) : (
                <>
                  <span>Enviar Mensagem</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

