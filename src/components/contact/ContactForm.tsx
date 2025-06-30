
import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/gmbhinvest333@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="mb-20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Susisiekite su mumis
        </h3>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Palikite savo kontaktus ir mes susisieksime su jumis per 24 valandas
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star size={48} className="text-white" />
          </div>
          <h4 className="text-3xl font-black text-white mb-4">
            Ačiū už jūsų žinutę!
          </h4>
          <p className="text-white/80 text-lg">
            Susisieksime su jumis artimiausiu metu.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <input type="hidden" name="_subject" value="Nauja žinutė iš Alfa Reklama svetainės" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://alfreklamatech.lovable.app/#kontaktai" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white font-bold">
                Vardas *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-black/40 border-cyan-400/30 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                placeholder="Jūsų vardas"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-white font-bold">
                El. paštas *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-black/40 border-cyan-400/30 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                placeholder="jusu@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <label htmlFor="message" className="text-white font-bold">
              Žinutė *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="bg-black/40 border-cyan-400/30 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
              placeholder="Parašykite savo žinutę..."
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Siunčiama...' : 'Siųsti žinutę'}
            {!isSubmitting && <Send size={20} className="ml-2" />}
          </Button>
        </form>
      )}
    </div>
  );
};
