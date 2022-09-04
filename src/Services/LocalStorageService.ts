export class LocalStorageService {
  static set(key: string, value: string | string[]) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  static get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '')
  }

  static append(key: string, value: string) {
    const state = LocalStorageService.get(key)
    LocalStorageService.set(key, [...state, value])
  }

  static remove(key: string, value: string) {
    const state = LocalStorageService.get(key)
    LocalStorageService.set(key, state.filter((item:string) => item !== value))
  }
}
