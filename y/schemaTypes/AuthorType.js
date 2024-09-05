import {UserIcon} from '@sanity/icons'

export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position'
    },
    {
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      name: 'name',
      lastName: 'lastName',
      media: 'image',
    },
    prepare({name, picture })
    {
      return {
        title: name,
        media: picture || UserIcon
      }
    }
  },
}