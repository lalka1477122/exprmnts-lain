"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const articles = [
  {
    id: 1,
    title: "Статья о Сети",
    description: "Узнайте больше о структуре и принципах работы глобальной сети",
    href: "/articles/1"
  },
  {
    id: 2, 
    title: "Протоколы",
    description: "Подробный разбор сетевых протоколов и их взаимодействия",
    href: "/articles/2"
  },
  {
    id: 3,
    title: "Безопасность", 
    description: "Основы кибербезопасности и защиты данных в сети",
    href: "/articles/3"
  }
]

export default function Main() {
  return (
    <main className="min-h-screen bg-background" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center py-12 sm:py-16 lg:py-24"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Добро пожаловать в Wired
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8" role="text">
              Погрузитесь в мир цифровых технологий и исследуйте безграничные возможности сетевого пространства вместе с нами.
            </p>

            <Button 
              size="lg" 
              className="text-base sm:text-lg w-full sm:w-auto"
              aria-label="Начать путешествие по сайту"
            >
              Начать путешествие
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <Image 
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              src="/photo_2025-02-07_19-01-27.jpg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Иллюстрация персонажа Лэйн из аниме Serial Experiments Lain"
              quality={100}
              priority
              role="img"
            />
          </motion.div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-12 sm:py-16 lg:py-24"
          role="region"
          aria-label="Список статей"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link 
                href={article.href}
                className="block focus:outline-none focus:ring-2 focus:ring-primary"
                aria-labelledby={`article-${article.id}`}
              >
                <div className="h-full p-4 sm:p-6 rounded-xl bg-card hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl">
                  <h2 
                    id={`article-${article.id}`}
                    className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4"
                  >
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {article.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </main>
  )
}