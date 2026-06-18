import { create } from 'zustand'

interface FormState {
  
  isSubmitting: boolean
  showModal: boolean
  status: 'success' | 'failed' | null
  submitForm: (formData: { name: string; email: string; message: string }) => Promise<void>
  closeModal: () => void

}

export const useFormStore = create<FormState>((set) => ({
  isSubmitting: false,
  showModal: false,
  status: null,
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  submitForm: async (_formData) => {
    set({ isSubmitting: true })
    
    // Simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // Random status berhasil atau gagal
    const isSuccess = Math.random() > 0.5
    
    set({ 
      isSubmitting: false, 
      showModal: true, 
      status: isSuccess ? 'success' : 'failed' 
    })
  },

  closeModal: () => set({ showModal: false, status: null })

}))
