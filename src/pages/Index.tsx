import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('cameras');

  const menuItems = [
    { id: 'cameras', label: 'Камеры', icon: 'Camera' },
    { id: 'um', label: 'УМ', icon: 'Monitor' },
    { id: 'hardware', label: 'Гос-инвентарь', icon: 'HardDrive' },
    { id: 'certificates', label: 'Сертификаты', icon: 'FileCheck' },
    { id: 'organizations', label: 'Структуры организаций', icon: 'Building' },
    { id: 'users', label: 'Пользователи', icon: 'Users' },
    { id: 'processes', label: 'Рабочие процессы', icon: 'Settings' },
  ];

  const subMenuItems = [
    'Типы услуг',
    'Адреса',
    'Размещение',
    'Модели камер',
    'Услуги',
    'Характеристики',
  ];

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Icon name="Menu" size={16} />
            <span>Портал подрядчика</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="p-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenuItem(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors ${
                  activeMenuItem === item.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-4 px-4">
            <div className="text-xs text-gray-500 mb-2">Характеристики</div>
            <div className="space-y-1">
              {subMenuItems.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Camera" size={16} className="text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">Устройство мониторинга: 18-3623</h1>
                <p className="text-sm text-gray-600">Санкт-Петербург, город Кронштадт, улица Литке, дом 11/37, литера А</p>
                <p className="text-xs text-gray-500">GUID: 806f965f-56c7-4b2d-934f-f74cdbefafdc</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Статус:</span>
                <Badge className="bg-green-500 text-white">Эксплуатация</Badge>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Edit" size={16} />
                <Icon name="Copy" size={16} />
                <Icon name="Download" size={16} />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-1" />
                Сменить статус
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-3 gap-6">
            {/* Screenshots */}
            <div className="space-y-4">
              <Card className="border-gray-300">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2">
                    <div className="text-center text-gray-500">
                      <Icon name="Image" size={32} className="mx-auto mb-2" />
                      <p className="text-sm">ПОСЛЕДНИЙ ДОСТУПНЫЙ СКРИНШОТ</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Технические параметры</p>
                </CardContent>
              </Card>
              
              <Card className="border-gray-300">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2">
                    <div className="text-center text-gray-500">
                      <Icon name="Image" size={32} className="mx-auto mb-2" />
                      <p className="text-sm">СКРИНШОТ ИЗ БАЗЫ ЭТАЛОННЫХ ИЗОБРАЖЕНИЙ</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Сервис</p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="border-gray-300">
              <CardContent className="p-4">
                <div className="aspect-video bg-orange-200 rounded overflow-hidden mb-2">
                  <img 
                    src="https://cdn.poehali.dev/files/2e15e891-185d-4aed-9e35-70a896366433.jpg"
                    alt="Карта"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500">Место установки</p>
              </CardContent>
            </Card>

            {/* Technical Parameters */}
            <Card className="border-gray-300">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Широта</p>
                      <p className="font-mono">60.008282</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Долгота</p>
                      <p className="font-mono">29.724467</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Азимут</p>
                      <p className="font-mono">305</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Высота подвеса</p>
                      <p className="font-mono">7</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">Парадная</p>
                      <p>-</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Объект размещения</p>
                      <p>Фасад здания (78-102210-1)</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Район</p>
                      <p>Кронштадтский</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Тип строения</p>
                      <p>жилой дом</p>
                    </div>
                    <div>
                      <p className="text-gray-600">В охранной зоне</p>
                      <p>НЕТ</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Адрес по РГИС</p>
                      <p>Санкт-Петербург, город Кронштадт, улица Литке, дом 11/37, литера А</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Details */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            <Card className="border-gray-300">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Технические параметры</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-gray-600">Категория УМ</Label>
                      <p className="font-mono">IP-камера</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Camera" size={16} />
                      <span className="font-mono">Dahua VTO3211X-P</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <Label>Видеопоток</Label>
                      <p>Да</p>
                    </div>
                    <div>
                      <Label>Угол обзора</Label>
                      <p>60</p>
                    </div>
                    <div>
                      <Label>Мегапиксели</Label>
                      <p>2MP</p>
                    </div>
                    <div>
                      <Label>Тип корпуса</Label>
                      <p>Антивандальный</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-mono text-sm bg-gray-50 p-2 rounded">
                      rtsp://username:password@IP_address[:rtsp_port]/live/channel
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <Label>IP-адрес камеры</Label>
                        <Input defaultValue="10.244.150.66" className="font-mono" />
                      </div>
                      <div>
                        <Label>IP-адрес замка</Label>
                        <Input defaultValue="10.244.150.65" className="font-mono" />
                      </div>
                      <div>
                        <Label>IP-адрес аудиообмена</Label>
                        <Input defaultValue="10.244.150.64" className="font-mono" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-300">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Сервис</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-gray-600">Сервисный идентификатор УМ</Label>
                      <p className="font-mono">18-3623</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Тип услуги</Label>
                      <p>3 (третий тип, двухпроемная)</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-gray-600">Контракт</Label>
                      <p>№140</p>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Оператор</Label>
                      <p>ПАО "Ростелеком"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm text-gray-600">Адрес по контракту</Label>
                    <p>Санкт-Петербург, город Кронштадт, улица Литке, дом 11/37, литера А</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm text-gray-600">Объект наблюдения</Label>
                    <p>Комплекс объектов дворово-уличной сети</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500">Результат проверки от 10.06.2025 20:04 Есть замечания</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Сетевая связанность ICMP PING</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Доступ по 80 порту</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Доступ по 554 порту</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Проверка параметров NTP</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;