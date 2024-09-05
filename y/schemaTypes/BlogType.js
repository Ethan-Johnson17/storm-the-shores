import {ComposeIcon} from '@sanity/icons'


export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  icon: ComposeIcon,
  fields: [
    {
      name: 'blogTitle',
      type: 'string',
      title: 'Blog Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: ['History', 'Fatherhood', 'Religion', 'How-To', 'Self-Improvement'],
        layout: 'dropdown'
      }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}]
    },
    {
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date',
    },
    {
      name: 'content',
      type: 'array',
      // Allows for the 'rich editor' for customizing headers, adding bold, italics, etc.
      of: [{type: 'block'}],
    },
    {
		name:  'aboutImage',
		type:  'image',
		title:  'About Image',
		options: {
			hotspot:  true,
	    }
    },
    {
		name:  'secondaryImage',
		type:  'image',
    title: 'Secondary Image',
    options: {
			hotspot:  true,
	    }
    },
    {
      name: 'postImageContent',
      type: 'array',
      // Allows for the 'rich editor' for customizing headers, adding bold, italics, etc.
      of: [{type: 'block'}],
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'blogTitle'},
      // Marks the field as requried and gives an error message
      validation: (rule) => rule.required().error('Required to generate a page.'),
      hidden: ({document}) => !document?.blogTitle,
    },
  ]
}