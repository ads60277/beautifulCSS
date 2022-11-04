tailwind.config = {
    theme: {
        extend: {
            colors: {
                'main-color': '#be9c79',
                'hover-main-color': '#8a7056',
                'main-black': '#333',
                'main-white': '#fff',
                'main-light': '#666',
                'border': '.2rem solid var(--black)',
                'box-shadow': '0 .5rem 1rem rgba(0,0,0,.1)',
            },
            width: {
                '34': '8.5rem',
                '45': '45px',
                '500': '500px',
                '10%': '10%',
                '20%': '20%',
                '25%': '25%',
                '30%': '30%',
                '40%': '40%',
                '50%': '50%',
                '60%': '60%',
                '70%': '70%',
                '80%': '80%',
                '90%': '90%',
                '95%': '95%',
                '1/8': '12.5%'
            },
            height: {
                '225': "225px",
                '5%': '5%',
                '10%': '10%',
                '20%': '20%',
                '30%': '30%',
                '40%': '40%',
                '50%': '50%',
                '60%': '60%',
                '70%': '70%',
                '80%': '80%',
                '85%': '85%',
                '90%': '90%',
                '95%': '95%',
                '700': '700px'
            },
            fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'body': ['"Open Sans"'],
                'Merienda': ['Merienda One'],
                'Nunito': ['Nunito']
            },
            fontSize: {
                sm: ['12px', '20px'],
                base: ['15px', '25px'],
                lg: ['20px', '30px'],
                xl: ['25px', '35px'],
                '5xl': ['3rem', 1.5],
                '4xl': ['2.25rem', '3.5rem'],
                '40': '40px'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)'
                    },
                    '50%': {
                        transform: 'rotate(3deg)'
                    },
                },
                fromleft: {
                    'from': {
                        transform: 'translateX(-50%)'
                    }
                },
                fromtop: {
                    'from': {
                        transform: 'translateY(-50%)'
                    }
                },
                fromright: {
                    'from': {
                        transform: 'translateX(30%)'
                    }
                },
                frombottom: {
                    'from': {
                        transform: 'translateY(50%)'
                    }
                },
                zoominout: {
                    '0%': {
                        transform: 'scale(1, 1)'
                    },
                    '50%': {
                        transform: 'scale(1.4, 1.4)'
                    },
                    '100%': {
                        transform: 'scale(1, 1)'
                    }
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                fromleft: 'fromleft 1s ease-in-out 1',
                fromtop: 'fromtop 1s ease-in-out 1',
                fromright: 'fromright 1s ease-in-out 1',
                frombottom: 'frombottom 1s ease-in-out 1',
                zoominout: 'zoominout 1s ease 1'
            }
        }
    }
}

