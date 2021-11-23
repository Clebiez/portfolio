import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'next-i18next';

const Footer = () => {
    const {t} = useTranslation('common'); 
    return (
    <footer className="w-full p-5 text-white bg-gray-800">
        <h2 className="text-center">{t('footer.title')}</h2>
        <div className="flex justify-center gap-4 my-5">
            <a
                className="flex items-center justify-center hover:text-indigo-200"
                aria-label="clement.lebiez@gmail.com"
                title="clement.lebiez@gmail.com"
                href="mailto:clement.lebiez@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <FaEnvelope className="text-4xl" />
            </a>
            <a
                className="flex items-center justify-center hover:text-indigo-200"
                aria-label="Clebiez LinkedIn"
                title="Clebiez LinkedIn"
                href="https://linkedin.com/in/clebiez"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin className="text-4xl" />
            </a>
            <a
                className="flex items-center justify-center hover:text-indigo-200"
                aria-label="Clebiez Github"
                title="Clebiez Github"
                href="https://github.com/clebiez"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub className="text-4xl " />
            </a>
            <a
                className="flex items-center justify-center hover:text-indigo-200"
                aria-label="Clebiez Twitter"
                title="Clebiez Twitter"
                href="https://twitter.com/clebiez"
                target="_blank"
                rel="noreferrer"
            >
                <FaTwitter className="text-4xl" />
            </a>
        </div>
    </footer>
)};

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        // Will be passed to the page component as props
      },
    };
  }
  
export default Footer
