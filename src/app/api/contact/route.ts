import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createContactLead } from '@/server/services/leads';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    const lead = await createContactLead({
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
      message: validated.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Our team will contact you shortly.',
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0]?.message || 'Validation error' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred while saving your inquiry.' },
      { status: 500 }
    );
  }
}
