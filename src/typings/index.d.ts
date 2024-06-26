declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.json' {
  const value: any
  export default value
}
declare module '*.md' {
  const str: string
  export default str
}
declare module '*.scss' {
  const str: string
  export default str
}
declare module '*.css' {
  const str: string
  export default str
}


