'use client';

import { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, CreditCard, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    codigoIndicacao: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gerar código único para o usuário
    const codigoUsuario = `MR${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    
    // Simular salvamento (em produção, conectar com backend/Supabase)
    const userData = {
      ...formData,
      id: Math.random().toString(36).substring(7),
      codigoIndicacao: codigoUsuario,
      dataCadastro: new Date(),
      planoAtivo: true
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Redirecionar para dashboard
    router.push('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </Link>

        {/* Card Principal */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Complete seu Cadastro
            </h1>
            <p className="text-gray-600">
              Preencha seus dados e comece a ganhar R$ 100 por indicação
            </p>
          </div>

          {/* Plano Info */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm mb-1">Plano Selecionado</p>
                <p className="text-2xl font-bold">Milionário Rapidoooo</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-100 text-sm mb-1">Investimento</p>
                <p className="text-3xl font-bold">R$ 200,00</p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4" />
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <CreditCard className="w-4 h-4" />
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="000.000.000-00"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4" />
                Código de Indicação (opcional)
              </label>
              <input
                type="text"
                name="codigoIndicacao"
                value={formData.codigoIndicacao}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Digite o código de quem indicou você"
              />
              <p className="text-sm text-gray-500 mt-2">
                Se alguém te indicou, cole o código aqui
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Ativar Plano por R$ 200,00
            </button>
          </form>

          {/* Garantias */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">✓ Seguro</p>
                <p>Dados protegidos</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">✓ Rápido</p>
                <p>Ativação imediata</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">✓ Suporte</p>
                <p>Ajuda 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
