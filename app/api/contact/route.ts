import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = bodySchema.parse(body)

    const messageData = {
      embeds: [
        {
          type: 'rich',
          title: `Mensagem recebida!`,
          description: `Nova mensagem, segue os dados do usuário. `,
          color: 0xff0000,
          fields: [
            {
              name: `Nome`,
              value: name,
              inline: true,
            },
            {
              name: `E-mail`,
              value: email,
              inline: true,
            },
            {
              name: `Mensagem`,
              value: message,
            },
          ],
          image: {
            url: `https://recreio.uol.com.br/media/uploads/animacoes/luffy_capa.jpg`,
            height: 0,
            width: 0,
          },
        },
      ],
    }

    await axios.post(WEBHOOK_URL, messageData)

    return NextResponse.json({
      message: 'Mensagem',
    })
  } catch (e) {
    console.error(e)
    return NextResponse.error
  }
}
