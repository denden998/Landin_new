import { useState } from 'react';
import { Mail, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { toast } from 'sonner@2.0.3';
import emailjs from 'emailjs-com';
import type { Language } from '../App';
import type { Page } from '../App';
import { motion } from 'framer-motion';
import waveBackground from 'figma:asset/379a9735aded060adfabe4a3d72c30de90503975.png';

const translations = {
  zh: {
    title: '联系我们',
    subtitle: '开始您的职业新旅程，我们随时为您提供帮助',
    contactInfo: '联系方式',
    email: '邮箱联系',
    emailAddress: 'landinllc@gmail.com',
    emailResponse: '24小时内回复',
    wechat: 'WeChat',
    wechatId: 'Landin01',
    wechatDesc: 'Add our advisor',
    workingHours: '服务时间',
    workingHoursText: '全年无休',
    workingHoursDesc: '随时为您提供专业咨询',
    onlineConsultation: '在线咨询',
    name: '姓名',
    namePlaceholder: '请输入您的姓名',
    phoneLabel: '电话',
    phonePlaceholder: '请输入您的联系电话',
    emailLabel: '邮箱',
    emailPlaceholder: '请输入您的邮箱地址',
    message: '留言',
    messagePlaceholder: '请简要描述您的求职需求...',
    submit: '提交咨询',
    submitNote: '提交后，我们的顾问将在24小时内与您联系',
    privacyNotice: '提交即表示您同意我们的',
    privacyLink: '隐私政策',
    and: '和',
    termsLink: '使用条款',
    successMessage: '感谢您的咨询！我们会尽快与您联系。',
    required: ' *',
    successDialogTitle: '提交成功！',
    successDialogDescription: '感谢您的咨询！我们已收到您的信息，专业顾问将在24小时内与您联系。',
    successDialogEmailSent: '确认邮件已发送至您的邮箱',
    successDialogClose: '好的',
  },
  en: {
    title: 'Contact Us',
    subtitle: 'Start your career journey, we\'re here to help',
    contactInfo: 'Contact Information',
    email: 'Email',
    emailAddress: 'landinllc@gmail.com',
    emailResponse: 'Reply within 24 hours',
    wechat: 'WeChat',
    wechatId: 'wxid_wn840ecf9pwl22',
    wechatDesc: 'Add our advisor',
    workingHours: 'Service Hours',
    workingHoursText: 'Year-Round Service',
    workingHoursDesc: 'Professional consultation available anytime',
    onlineConsultation: 'Online Consultation',
    name: 'Name',
    namePlaceholder: 'Please enter your name',
    phoneLabel: 'Phone',
    phonePlaceholder: 'Please enter your phone number',
    emailLabel: 'Email',
    emailPlaceholder: 'Please enter your email address',
    message: 'Message',
    messagePlaceholder: 'Please briefly describe your job search needs...',
    submit: 'Submit',
    submitNote: 'Our advisor will contact you within 24 hours after submission',
    privacyNotice: 'By submitting, you agree to our',
    privacyLink: 'Privacy Policy',
    and: 'and',
    termsLink: 'Terms of Use',
    successMessage: 'Thank you for your inquiry! We will contact you soon.',
    required: ' *',
    successDialogTitle: 'Submitted Successfully!',
    successDialogDescription: 'Thank you for your inquiry! We have received your information and our professional advisor will contact you within 24 hours.',
    successDialogEmailSent: 'A confirmation email has been sent to your inbox',
    successDialogClose: 'OK',
  },
};

interface ContactProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

export function Contact({ language, onNavigate }: ContactProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS credentials
      const SERVICE_ID = 'service_c63pygb';
      const PUBLIC_KEY = 'r3yMY88JmzFV1bjJo';
      
      // 模板1：发送给LandIn的咨询信息
      const ADMIN_TEMPLATE_ID = 'template_m9hjy92';
      const adminParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };

      // 模板2：自动回复给用户的感谢邮件
      const USER_TEMPLATE_ID = 'template_uqv0xls';
      const userParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      };

      console.log('开始发送邮件...');
      console.log('表单数据:', formData);
      
      // 第一步：发送咨询信息到 landinllcc@gmail.com
      console.log('步骤1: 发送咨询信息到LandIn...');
      const adminResult = await emailjs.send(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        adminParams,
        PUBLIC_KEY
      );
      console.log('✓ 咨询信息发送成功:', adminResult);

      // 第二步：发送感谢邮件给用户（只有在用户填写了邮箱时才发送）
      if (formData.email && formData.email.trim() !== '') {
        console.log('步骤2: 发送自动回复给用户...');
        const userResult = await emailjs.send(
          SERVICE_ID,
          USER_TEMPLATE_ID,
          userParams,
          PUBLIC_KEY
        );
        console.log('✓ 自动回复发送成功:', userResult);
      } else {
        console.log('用户未填写邮箱，跳过自动回复');
      }

      console.log('✅ 所有邮件都发送成功！');

      toast.success(t.successMessage);
      setFormData({ name: '', phone: '', email: '', message: '' });

      // 显示成功对话框
      setShowSuccessDialog(true);
      setSubmittedEmail(formData.email);
    } catch (error) {
      console.error('❌ 邮件发送失败 - 详细错误:', error);
      console.error('错误类型:', typeof error);
      console.error('错误内容:', JSON.stringify(error, null, 2));
      
      toast.error(language === 'zh' 
        ? '发送失败，请稍后重试或直接联系我们的邮箱。' 
        : 'Failed to send. Please try again later or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-orange-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">{t.contactInfo}</h3>
            <div className="space-y-6 mb-8">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">{t.email}</div>
                    <div className="text-gray-600">{t.emailAddress}</div>
                    <div className="text-gray-500 text-sm">{t.emailResponse}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">{t.wechat}</div>
                    <div className="text-gray-600">{t.wechatId}</div>
                    <div className="text-gray-500 text-sm">{t.wechatDesc}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">{t.workingHours}</div>
                    <div className="text-gray-600">{t.workingHoursText}</div>
                    <div className="text-gray-500 text-sm">{t.workingHoursDesc}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-gray-900">{t.onlineConsultation}</h3>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-md">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t.name}{t.required}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  {t.phoneLabel}{t.required}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t.message}{t.required}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  className="bg-white"
                />
              </div>
              <p className="text-gray-500 text-sm text-center">
                {t.privacyNotice}
                <a
                  href="#"
                  className="text-blue-500 underline"
                  onClick={() => onNavigate('privacy')}
                >
                  {t.privacyLink}
                </a>
                {t.and}
                <a
                  href="#"
                  className="text-blue-500 underline"
                  onClick={() => onNavigate('terms')}
                >
                  {t.termsLink}
                </a>
              </p>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Send className="mr-2 h-5 w-5 animate-pulse" />
                    {language === 'zh' ? '发送中...' : 'Sending...'}
                  </>
                ) : (
                  t.submit
                )}
              </Button>
              <p className="text-gray-500 text-sm text-center">
                {t.submitNote}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* 成功对话框 */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">{t.successDialogTitle}</DialogTitle>
            <DialogDescription className="text-center">
              {t.successDialogDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-lg bg-orange-50 p-4 text-center">
            <p className="text-sm text-orange-800">
              {submittedEmail ? t.successDialogEmailSent : ''}
            </p>
          </div>
          <Button
            type="button"
            className="w-full mt-2"
            size="lg"
            onClick={() => setShowSuccessDialog(false)}
          >
            {t.successDialogClose}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}