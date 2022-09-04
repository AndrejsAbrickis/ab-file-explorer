export class LocalStorageService {
  static set(key: string, value: string | string[]) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  static get(key: string) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : value
  }

  static append(key: string, value: string) {
    const state = LocalStorageService.get(key) || []
    LocalStorageService.set(key, [...state, value])
  }

  static remove(key: string, value: string) {
    const state = LocalStorageService.get(key)

    if (!state) {
      return
    }

    LocalStorageService.set(
      key,
      state.filter((item: string) => item !== value),
    )
  }

  static clear(key: string) {
    localStorage.removeItem(key)
  }
}
