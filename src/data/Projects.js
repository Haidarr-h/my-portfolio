import evalynPhoto from '../assets/evalyn_dashboard.png';
import upscale from '../assets/upscale.png';
import googleMaps from '../assets/web-scrap.png';
import nextLink from '../assets/nextlink.png';
import CareerLetter from '../assets/careerletter.png';


export const projectList = [
    {
        title:"CareerLetter: Automatic Generate Cover Letter for Job Application",
        image_source: CareerLetter,
        desc: "Modern form & cover letter website that uses AI to generate cover letter for job application.",
        tags: ["React", "FastAPI", "Gemini API", "Prompt Engineering"],
        link: "https://careerletter.netlify.app"
    },
    {
        title:"Evalyn: Automatic Grading with AI",
        image_source: evalynPhoto,
        desc: "Modern form & grading website that uses AI to evaluate essays and give instant feedback.",
        tags: ["React", "FastAPI", "Microsoft Azure OpenAI", "PostgreSQL"],
        link: "https://evalyn.netlify.app"
    },
    {
        title:"Upscale",
        image_source: upscale,
        desc: "Help businesses to get their perfect talents. Help talents meet their perfect businesses.",
        tags: ["React", "Tailwindcss", "Framer Motion"],
        link: "https://haidarr-h.github.io/upscale-react/"
    },
    {
        title:"Automatic Google Maps Web Scrapping",
        image_source: googleMaps,
        desc: "Scrapping 2.400.000 routes from Google Maps in 30 days with Python Automation",
        tags: ["Python", "Selenium", "Docker", "Google Cloud", "API"],
    },
    {
        title:"NextLink: Scheduling Automation with AI",
        image_source: nextLink,
        desc: "Generate your task schedule, manage your tasks and jobdesks automatically with NextLink",
        tags: ["Python", "Machine Learning", "TensorFlow", "Google Cloud", "Docker", "API"],
    },
]