document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      // Default to 'auto' if no theme is stored
      return 'auto'
    }
  
    const updateThemeIcon = theme => {
      const themeIcon = document.getElementById('theme-icon')
      if (theme === 'dark') {
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill')
        themeIcon.classList.replace('bi-circle-half', 'bi-moon-fill')
      } else if (theme === 'light') {
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill')
        themeIcon.classList.replace('bi-circle-half', 'bi-sun-fill')
      } else if (theme === 'auto') {
        themeIcon.classList.replace('bi-sun-fill', 'bi-circle-half')
        themeIcon.classList.replace('bi-moon-fill', 'bi-circle-half')
      }
    }
  
    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute(
          'data-bs-theme',
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        )
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
      updateThemeIcon(theme)
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
  
      const themeToggle = document.getElementById('theme-toggle')
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const currentTheme = getStoredTheme() || getPreferredTheme()
          const newTheme =
            currentTheme === 'dark' ? 'light' : currentTheme === 'light' ? 'auto' : 'dark'
          setStoredTheme(newTheme)
          setTheme(newTheme)
          showActiveTheme(newTheme, true)
        })
      }
    })
  });