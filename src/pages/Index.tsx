import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const methodologies = [
    {
      icon: '🧸',
      title: 'Игровая методика',
      description: 'Обучение через игру и развивающие активности',
      color: 'bg-primary/10 border-primary/20'
    },
    {
      icon: '📚',
      title: 'Монтессори',
      description: 'Самостоятельное развитие в подготовленной среде',
      color: 'bg-secondary/10 border-secondary/20'
    },
    {
      icon: '🎨',
      title: 'Творческое развитие',
      description: 'Раскрытие потенциала через искусство и творчество',
      color: 'bg-accent/10 border-accent/20'
    },
    {
      icon: '🌈',
      title: 'ТРИЗ-педагогика',
      description: 'Развитие креативного мышления и изобретательности',
      color: 'bg-blue-100 border-blue-200'
    }
  ];

  const news = [
    {
      date: '15 октября 2024',
      title: 'Открытое занятие по математике',
      description: 'Приглашаем родителей на открытое занятие в старшей группе'
    },
    {
      date: '10 октября 2024',
      title: 'Праздник осени',
      description: 'Яркое мероприятие с играми, конкурсами и угощениями'
    },
    {
      date: '5 октября 2024',
      title: 'День учителя',
      description: 'Поздравляем всех педагогов с профессиональным праздником!'
    }
  ];

  const documents = [
    { name: 'Образовательная программа ДОУ', type: 'PDF', size: '2.4 МБ' },
    { name: 'Годовой план работы', type: 'DOC', size: '856 КБ' },
    { name: 'Расписание занятий', type: 'PDF', size: '124 КБ' },
    { name: 'Методические рекомендации', type: 'PDF', size: '1.8 МБ' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🧸</div>
              <div>
                <h1 className="font-display font-bold text-2xl text-foreground">
                  Детский Сад №1
                </h1>
                <p className="text-sm text-muted-foreground">Старший воспитатель</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Методики', 'Родителям', 'Галерея', 'Новости', 'Документы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  className="font-medium text-foreground hover:text-primary transition-colors story-link"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Добро пожаловать в мир{' '}
              <span className="text-primary">счастливого</span>{' '}
              детства! 🌟
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Создаём условия для гармоничного развития каждого ребёнка через современные методики и любовь к детям
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full text-lg px-8">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                Контакты
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-8 flex items-center justify-center">
              <div className="text-9xl">🎨</div>
            </div>
            <div className="absolute -top-6 -right-6 text-6xl animate-bounce">✨</div>
            <div className="absolute -bottom-6 -left-6 text-6xl animate-bounce delay-100">🌈</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="font-display font-bold text-4xl mb-4">Наши методики 📖</h3>
          <p className="text-lg text-muted-foreground">
            Используем лучшие образовательные практики для развития детей
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologies.map((method, index) => (
            <Card
              key={index}
              className={`${method.color} border-2 hover-scale cursor-pointer transition-all`}
            >
              <CardHeader>
                <div className="text-5xl mb-4">{method.icon}</div>
                <CardTitle className="font-display text-xl">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{method.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="news" className="text-base">Новости</TabsTrigger>
            <TabsTrigger value="gallery" className="text-base">Галерея</TabsTrigger>
            <TabsTrigger value="docs" className="text-base">Документы</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="font-display text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      {item.date}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="gallery">
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-6xl hover-scale cursor-pointer"
                >
                  {['🎨', '📚', '🧸', '🌈', '✨', '🎭'][i - 1]}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="docs" className="space-y-4">
            {documents.map((doc, index) => (
              <Card key={index} className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="FileText" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.name}</CardTitle>
                        <CardDescription>{doc.type} • {doc.size}</CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" size={20} />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white border-0">
            <CardHeader className="space-y-4 py-8">
              <CardTitle className="font-display font-bold text-3xl">Свяжитесь с нами 📞</CardTitle>
              <CardDescription className="text-white/90 text-base">
                Мы всегда рады ответить на ваши вопросы и помочь с выбором образовательной программы
              </CardDescription>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (123) 456-78-90</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>info@detskysad1.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} />
                  <span>г. Москва, ул. Детская, д. 1</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} />
                  <span>Пн-Пт: 7:00 - 19:00</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-2xl">Форма обратной связи</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
              }}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="ivanov@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Расскажите, чем мы можем вам помочь..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-white/50 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Детский Сад №1. Создано с любовью к детям 💚</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;