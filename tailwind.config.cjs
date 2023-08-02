/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [
        ({addComponents, theme}) => {
            addComponents({
                'h1': {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.bold'),
                    borderBottomWidth: theme('borderWidth.2'),
                    borderBottomColor: theme('colors.gray.200'),
                    paddingBottom: theme('spacing.2'),
                    marginBottom: theme('spacing.4'),
                },
                'a': {
                    color: theme('colors.blue.500'),
                    '&:hover': {
                        color: theme('colors.blue.700'),
                    },
                    '@media (prefers-color-scheme: dark)': {
                        color: theme('colors.blue.400'),
                        '&:hover': {
                            color: theme('colors.blue.300'),
                        }
                    }
                },
            })
        }
    ],
}
