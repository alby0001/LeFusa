import { NextRequest, NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefono } = await req.json()
    if (!nome || !email) {
      return NextResponse.json({ error: 'Nome ed email sono obbligatori' }, { status: 400 })
    }
    await sql`
      INSERT INTO lefusa_waitlist (nome, email, telefono)
      VALUES (${nome}, ${email}, ${telefono ?? null})
    `
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error: any) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Questa email è già in lista' }, { status: 409 })
    }
    console.error(error)
    return NextResponse.json({ error: 'Errore del server' }, { status: 500 })
  }
}
