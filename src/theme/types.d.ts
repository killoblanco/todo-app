export interface DarkModeStore {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  toggleDarkMode: () => void
}

export type DarkMode = Pick<DarkModeStore, 'darkMode'>
