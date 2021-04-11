export const variants = {
	variantTextTranslate: {
		hidden: {
			translateY: 100,
		},
		visible: (i) => ({
			opacity: 1,
			translateY: 0,
			transition: {
				duration: 0.36,
				ease: 'easeInOut',
				delay: 0.08 * i,
			},
		}),
	},
	variantTextFadein: {
		hidden: {
			translateY: 40,
			opacity: 0,
		},
		visible: (i) => ({
			translateY: 0,
			opacity: 1,
			transition: {
				duration: 0.32,
				ease: 'easeInOut',
				delay: 0.12 * i,
			},
		}),
	},
	variantBlockFadein: {
		hidden: {
			opacity: 0,
			translateY: 20,
		},
		visible: {
			opacity: 1,
			translateY: 0,
		},
	},
	variantImageTranslate: {
		hidden: {
			translateY: 100,
			opacity: 0,
		},
		visible: (i) => ({
			opacity: 1,
			translateY: 0,
			transition: {
				duration: 0.36,
				ease: 'easeInOut',
				delay: 0.04 * i,
			},
		}),
	},
	variantFadeIn: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.36,
				ease: 'easeInOut',
			},
		},
	},
	variantFadeOut: {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.36,
				ease: 'easeInOut',
			},
		},
		visible: {
			opacity: 1,
		},
	},
}
