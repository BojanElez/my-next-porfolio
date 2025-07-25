import { calculateYearsOfExperience } from './calculateExperience'

describe('calculateYearsOfExperience', () => {
  beforeEach(() => {
    // Mock the current date to make tests deterministic
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('handles edge case at start of experience', () => {
    // Set current date to January 1, 2019 (same as start date)
    jest.setSystemTime(new Date('2019-01-01'))
    
    const years = calculateYearsOfExperience()
    
    expect(years).toBe(0)
  })

  it('handles future dates gracefully', () => {
    jest.setSystemTime(new Date('2025-12-31'))
    
    const years = calculateYearsOfExperience()
    
    expect(years).toBe(6)
  })
})
