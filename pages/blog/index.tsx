import { PostItem } from '@/components/blog'
import { MainLayout } from '@/components/layout'
import { Post } from '@/models'
import { getPostList } from '@/utils/posts'
import { Box, Container, Divider } from '@mui/material'
import { GetStaticProps } from 'next'
import Link from 'next/link'
export interface BlogListPageProps {
	posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
	// console.log('posts', posts)

	return (
		<Box>
			<Container>
				<h1>Blog List Page</h1>

				<Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
					{posts.map((post) => (
						<li key={post.id}>
							<Link href={`/blog/${post.slug}`}>
								<a>
									<PostItem post={post} />
								</a>
							</Link>
							<Divider sx={{ my: 3 }} />
						</li>
					))}
				</Box>
			</Container>
		</Box>
	)
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
	// server-side
	// build-time
	// console.log('static props')
	// const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	// const data = await response.json()
	// console.log(data)

	// convert markdown files into list of javascript objects
	const postList = await getPostList()

	return {
		props: {
			posts: postList,
		},
	}
}
