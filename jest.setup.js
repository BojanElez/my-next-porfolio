import '@testing-library/jest-dom'

global.Request = global.Request || class Request {
  constructor(input, init = {}) {
    this.url = input
    this.method = init?.method || 'GET'
    this.headers = new Headers(init?.headers || {})
    this.body = init?.body
  }
}

global.Response = global.Response || class Response {
  constructor(body, init = {}) {
    this.body = body
    this.status = init?.status || 200
    this.ok = this.status >= 200 && this.status < 300
    this.headers = new Headers(init?.headers || {})
  }
  
  async json() {
    return JSON.parse(this.body)
  }
  
  async text() {
    return this.body
  }
}

global.Headers = global.Headers || class Headers {
  constructor(init = {}) {
    this.headers = new Map()
    if (init) {
      Object.entries(init).forEach(([key, value]) => {
        this.headers.set(key.toLowerCase(), value)
      })
    }
  }
  
  get(name) {
    return this.headers.get(name?.toLowerCase())
  }
  
  set(name, value) {
    this.headers.set(name?.toLowerCase(), value)
  }
  
  has(name) {
    return this.headers.has(name?.toLowerCase())
  }
}

global.fetch = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  })),
  usePathname: jest.fn(() => '/en'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}))

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => (key) => key),
  useLocale: jest.fn(() => 'en'),
}))

jest.mock('next-intl/navigation', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  })),
}))

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: 'test-email-id' }),
    },
  })),
}))

global.console.error = jest.fn()
global.console.warn = jest.fn()