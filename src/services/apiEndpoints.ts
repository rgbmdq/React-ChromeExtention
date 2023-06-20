
export const proxy = 'http://localhost:3000/proxy?url='

export const urlPattern = {
  dishes: {
    GET: {
      dishes: `${proxy}https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes`,
    },

    POST: {
      dishCreation: `${proxy}https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes`,
    },
  },
}
