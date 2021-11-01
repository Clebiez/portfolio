import MainLayout from './MainLayout'

const ArticleLayout = ({ children }) => {
    return (
        <MainLayout>
            <main className="max-w-4xl m-auto bg-white bg-opacity-90 p-12">
                {children}
            </main>
        </MainLayout>
    )
}

export default ArticleLayout
