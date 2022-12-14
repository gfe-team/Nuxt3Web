export default defineEventHandler(async (event) => {
  // const data = await $fetch("https://api.nuxtjs.dev/mountains", {
  //     // @ts-ignore
  //     // pick: ["title", "updatedAt"]
  // });

  const data = [
    {
      title: 'Aconcagua',
      description:
        'Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain in the Americas and the highest outside of Asia, being the highest in both the Southern and Western Hemispheres with a summit elevation of 6,960.8 metres.',
      height: '6,962 m',
      countries: ['Argentina'],
      continent: 'South America',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aconcagua2016.jpg/600px-Aconcagua2016.jpg',
      dir: '/mountains',
      path: '/mountains/aconcagua',
      slug: 'aconcagua',
      updatedAt: '2020-12-11T15:40:35.000Z',
    },
    {
      title: 'Denali',
      description:
        'Denali is the highest mountain peak in North America, with a summit elevation of 20,310 feet above sea level. With a topographic prominence of 20,156 feet and a topographic isolation of 4,629 miles, Denali is the third most prominent and third most isolated peak on Earth, after Mount Everest and Aconcagua.',
      height: '6,190 m',
      countries: ['Alaska'],
      continent: 'North America',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/600px-Wonder_Lake_and_Denali.jpg',
      dir: '/mountains',
      path: '/mountains/denali',
      slug: 'denali',
      updatedAt: '2020-12-11T15:40:35.000Z',
    },
  ]

  return {
    list: data,
  }
})
