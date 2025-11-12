# 邮件发送功能设置指南 / Email Setup Guide

## 📧 EmailJS 配置说明

网站已集成 EmailJS 服务，当用户提交咨询表单后，会自动发送邮件到 `landinllcc@gmail.com`。

### 设置步骤 / Setup Steps:

#### 1. 注册 EmailJS 账户
访问 [EmailJS.com](https://www.emailjs.com/) 并创建免费账户。

#### 2. 添加邮件服务 (Email Service)
- 登录后，进入 **Email Services** 页面
- 点击 **Add New Service**
- 选择 **Gmail** 作为邮件服务提供商
- 连接您的 Gmail 账户 (`landinllcc@gmail.com`)
- 记下您的 **Service ID**（例如：`service_abc123`）

#### 3. 创建邮件模板 (Email Template)
- 进入 **Email Templates** 页面
- 点击 **Create New Template**
- 使用以下模板内容：

**模板标题 / Template Subject:**
```
新咨询 - {{from_name}} | New Inquiry from {{from_name}}
```

**模板内容 / Template Content:**
```
您收到来自网站的新咨询：
You have received a new inquiry from the website:

姓名 / Name: {{from_name}}
电话 / Phone: {{from_phone}}
邮箱 / Email: {{from_email}}

留言内容 / Message:
{{message}}

---
此邮件由 LandIn 网站自动发送
This email was sent automatically from the LandIn website
```

**收件人设置 / To Email:**
```
landinllcc@gmail.com
```

**回复邮箱设置 / Reply To:**
```
{{reply_to}}
```

- 保存模板并记下您的 **Template ID**（例如：`template_xyz789`）

#### 4. 获取 Public Key
- 进入 **Account** 页面
- 在 **API Keys** 部分找到您的 **Public Key**（例如：`user_abcd1234efgh5678`）

#### 5. 更新代码配置
打开 `/components/Contact.tsx` 文件，找到以下代码并替换：

```typescript
// 替换这三个值：
const SERVICE_ID = 'YOUR_SERVICE_ID';      // 替换为步骤2的 Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // 替换为步骤3的 Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // 替换为步骤4的 Public Key
```

例如：
```typescript
const SERVICE_ID = 'service_abc123';
const TEMPLATE_ID = 'template_xyz789';
const PUBLIC_KEY = 'user_abcd1234efgh5678';
```

### ✅ 完成！

配置完成后，用户提交表单时，您将在 `landinllcc@gmail.com` 收到包含以下信息的邮件：
- 用户姓名
- 用户电话
- 用户邮箱
- 用户留言内容

### 🔒 安全说明

EmailJS 的 Public Key 是安全的，可以在前端代码中使用。EmailJS 会自动处理邮件发送的安全性和限流。

### 📊 免费套餐限制

EmailJS 免费套餐包含：
- 每月 200 封邮件
- 基础模板功能
- Gmail/Outlook 集成

如果需要更多邮件配额，可以升级到付费套餐。

---

## 备选方案：使用其他邮件服务

如果您更倾向使用其他邮件服务（如 SendGrid、Mailgun 等），需要设置后端服务。建议使用：
- **Supabase Edge Functions** + SendGrid/Resend
- **Netlify Functions** + 邮件API
- **Vercel Functions** + 邮件API

如需帮助设置后端方案，请联系开发团队。
