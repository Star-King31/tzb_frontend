export type LoginForm = {
  username: string
  password: string
}

export type SignupForm = {
  username: string
  password: string
  email: string
  confirmPassword: string
}

export type User = {
  id: number
  username: string
  email: string
  createdAt: string
  role: string
}
