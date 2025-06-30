interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '大圍棋教室',
    description: `使用 Vue.js全家桶，及Lottie動畫製作的圍棋教學網站。`,
    imgSrc: '/static/images/go-class.png',
    href: 'https://22495521.github.io/BigGo/#/FrontPage',
  },
]

export default projectsData
