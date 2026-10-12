# EmailJS Setup Instructions - VivasayaThozhan

## ✅ **Current Status:**
- ✅ EmailJS package installed
- ✅ Service ID configured: `service_lzghnhf`
- ⏳ Template ID needed
- ⏳ Public Key needed

## 🚀 **Next Steps (5 minutes):**

### **Step 1: Create Email Template**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click **Email Templates** → **Create New Template**
3. Use this template:

**Template Name:** `vivasaya_contact_form`

**Subject:** `New Inquiry from VivasayaThozhan Website - {{from_name}}`

**Content:**
```html
Hello VivasayaThozhan Team,

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested: {{service}}

Message:
{{message}}

---
Please respond within 24 hours.
Sent automatically from VivasayaThozhan Contact Form
```

4. **Save** and copy the **Template ID**

### **Step 2: Get Public Key**
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### **Step 3: Update Code**
In `FAQContactSection.jsx`, replace:

```javascript
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

With your actual values:
```javascript
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
```

## 📧 **Email Will Be Sent To:**
`vivasayathozhaan@gmail.com`

## � **Current Behavior:**
- Form shows "DEMO MODE" in console
- Still validates and shows success/error messages
- Once configured, will send real emails

## 🆘 **Need Help?**
1. EmailJS Tutorial: https://www.emailjs.com/docs/tutorial/creating-contact-form/
2. Template Variables: https://www.emailjs.com/docs/user-guide/template-params/

## 📝 **Template Variables Used:**
- `{{from_name}}` - First + Last name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Phone number
- `{{service}}` - Selected service
- `{{message}}` - Customer's message

---

**Once configured, your contact form will automatically send emails to your Gmail! 🎉**
