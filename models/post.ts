export interface Author {
	name: string
	title: string
	profileUrl: string
	avatarUrl: string
}

export interface Post {
	id: number | string
	title: string
	publishedDate: string
	tagList: string[]
	description: string

	slug: string
	author?: Author
	thumbnailUrl?: string

	mdContent?: string
	htmlContent?: string
}
