import React, { useState } from 'react';
import { siteContent } from '../data/mockContent';
import { MessageCircle, Calendar, User, Phone, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';

const PreBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: '',
    date: '',
    items: [],
    quantity: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemToggle = (productName) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.includes(productName)
        ? prev.items.filter(item => item !== productName)
        : [...prev.items, productName]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.occasion || !formData.items.length) {
      toast.error('Please fill all required fields');
      return;
    }

    // Create WhatsApp message
    const message = `
🎉 *Pre-Booking Request*

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
🎊 Occasion: ${formData.occasion}
📅 Date: ${formData.date || 'To be decided'}

🍰 Selected Items:
${formData.items.map(item => `• ${item}`).join('\n')}

📦 Approximate Quantity: ${formData.quantity || 'To be discussed'}

💬 Additional Notes:
${formData.message || 'None'}
    `.trim();

    const whatsappUrl = `${siteContent.contact.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      occasion: '',
      date: '',
      items: [],
      quantity: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-24 px-6" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ background: 'var(--brand-maroon)', color: 'white' }}>
            <span className="text-sm font-semibold uppercase tracking-wider">Pre-Booking</span>
          </div>
          <h1 className="heading-1 mb-4">Reserve Your Special Order</h1>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Fill in the details below and we'll connect with you on WhatsApp to finalize your order
          </p>
        </div>

        <Card className="card-luxury">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
                  <User size={18} />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
                  <Phone size={18} />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            {/* Occasion Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="occasion" className="flex items-center gap-2 font-semibold">
                  <Package size={18} />
                  Occasion *
                </Label>
                <Select value={formData.occasion} onValueChange={(value) => handleInputChange('occasion', value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ramadan">Ramadan</SelectItem>
                    <SelectItem value="eid">Eid Celebration</SelectItem>
                    <SelectItem value="wedding">Wedding / Nikkah</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="corporate">Corporate Gifting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2 font-semibold">
                  <Calendar size={18} />
                  Delivery Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            {/* Product Selection */}
            <div className="space-y-2">
              <Label className="font-semibold text-lg">Select Items *</Label>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Choose the delicacies you'd like to order</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {siteContent.products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleItemToggle(product.name)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      formData.items.includes(product.name)
                        ? 'border-[#8B3A3A] bg-[#FFF8F0]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        formData.items.includes(product.name)
                          ? 'border-[#8B3A3A] bg-[#8B3A3A]'
                          : 'border-gray-300'
                      }`}>
                        {formData.items.includes(product.name) && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {product.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <Label htmlFor="quantity" className="font-semibold">
                Approximate Quantity
              </Label>
              <Input
                id="quantity"
                type="text"
                placeholder="e.g., 5kg, 50 pieces, for 100 people"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                className="h-12"
              />
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                We'll help you determine the exact quantity when we connect
              </p>
            </div>

            {/* Additional Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-semibold">
                Additional Notes or Special Requests
              </Label>
              <Textarea
                id="message"
                placeholder="Any dietary preferences, packaging requirements, or special instructions..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="btn-primary-luxury w-full h-14 text-base"
              >
                <MessageCircle size={20} />
                Send Pre-Booking Request on WhatsApp
              </Button>
              <p className="text-center text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
                We'll confirm availability and finalize details via WhatsApp
              </p>
            </div>
          </form>
        </Card>

        {/* Info Box */}
        <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--brand-beige)' }}>
          <h3 className="font-semibold text-lg mb-3" style={{ color: 'var(--brand-maroon)' }}>
            ⚡ Important Information
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li>• Limited daily capacity—we recommend booking at least 5-7 days in advance</li>
            <li>• During Ramadan and Eid, book 10-15 days ahead to secure your slot</li>
            <li>• All orders are freshly prepared—no stock items</li>
            <li>• Bulk orders (5kg+) require advance payment confirmation</li>
            <li>• We serve Mumbai, Thane & Navi Mumbai</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreBookingForm;
