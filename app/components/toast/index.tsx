'use client'

import { Toaster } from 'react-hot-toast'

export const ToastNotifications = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: '#0c6500',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#0c6500',
          },
        },
        error: {
          style: {
            background: '#ef4444',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ef4444',
          },
        },
      }}
    />
  )
}
