import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCamera, setSelectedCamera] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const cameras = [
    { id: '001', status: 'confirmed', name: 'Камера 001' },
    { id: '002', status: 'checked', name: 'Камера 002' },
    { id: '003', status: 'requires_check', name: 'Камера 003' },
    { id: '004', status: 'not_working', name: 'Камера 004' },
    { id: '005', status: 'confirmed', name: 'Камера 005' },
    { id: '006', status: 'checked', name: 'Камера 006' },
  ];

  const screenshots = [
    { id: '1', url: '/img/b5dfb6af-8e11-4212-beea-5c5d8610f364.jpg', timestamp: '2025-01-15 14:30:25' },
    { id: '2', url: '/img/49c04e84-b38b-4186-868f-1227265837b5.jpg', timestamp: '2025-01-15 14:32:10' },
    { id: '3', url: '/img/c72a1d0b-4b0c-4f45-9030-23470dda0709.jpg', timestamp: '2025-01-15 14:35:45' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'checked': return 'bg-blue-500';
      case 'requires_check': return 'bg-yellow-500';
      case 'not_working': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Подтверждён';
      case 'checked': return 'Проверен';
      case 'requires_check': return 'Требует проверки';
      case 'not_working': return 'Не работает';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Устройство мониторинга</h1>
          <p className="text-gray-600">Система управления камерами видеонаблюдения</p>
        </div>

        <div className="space-y-8">
          {/* Номер камеры */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Camera" size={20} />
                Выбор камеры
              </CardTitle>
              <CardDescription>Выберите номер камеры для мониторинга</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cameras.map((camera) => (
                  <div
                    key={camera.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedCamera === camera.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedCamera(camera.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{camera.name}</h3>
                      <Badge className={`${getStatusColor(camera.status)} text-white`}>
                        {getStatusText(camera.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">ID: {camera.id}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Скриншоты */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Image" size={20} />
                Скриншоты
              </CardTitle>
              <CardDescription>Просмотр изображений с камер видеонаблюдения</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {screenshots.map((screenshot) => (
                  <div
                    key={screenshot.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                      selectedImage === screenshot.id ? 'border-blue-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(screenshot.id)}
                  >
                    <img
                      src={screenshot.url}
                      alt={`Screenshot ${screenshot.id}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm text-gray-600">{screenshot.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Руководство */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" size={20} />
                Руководство
              </CardTitle>
              <CardDescription>Техническая документация объекта мониторинга</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="object-desc">Описание объекта ГСВН</Label>
                  <Input id="object-desc" defaultValue="Комплекса объектов" />
                </div>
                <div>
                  <Label htmlFor="rgis-id">Идентификатор РГИС</Label>
                  <Input id="rgis-id" defaultValue="3333" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="rgis-address">Адрес РГИС</Label>
                <Input id="rgis-address" defaultValue="улица Моячкова" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="install-place">Место установки</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите место" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building">Здание</SelectItem>
                      <SelectItem value="forest">Лес</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Место размещения</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите размещение" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hall">Зал</SelectItem>
                      <SelectItem value="club">Клуб</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="monitoring-objects">Объекты мониторинга</Label>
                <Input id="monitoring-objects" defaultValue="стоянка, площадь" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="longitude">Долгота</Label>
                  <Input id="longitude" defaultValue="30303" />
                </div>
                <div>
                  <Label htmlFor="latitude">Широта</Label>
                  <Input id="latitude" defaultValue="56985" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="azimuth">Азимут</Label>
                  <Input id="azimuth" defaultValue="345" />
                </div>
                <div>
                  <Label htmlFor="height">Высота</Label>
                  <Input id="height" defaultValue="7" />
                </div>
                <div>
                  <Label htmlFor="map-scale">Масштаб карты</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="65" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="65">65</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="access-method">Способ доступа</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите способ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ladder">Лестница</SelectItem>
                    <SelectItem value="elevator">Лифт</SelectItem>
                    <SelectItem value="stairs">Ступени</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comment">Добавить комментарий/сообщение</Label>
                <Textarea id="comment" placeholder="Введите комментарий..." />
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Последние комментарии</h4>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">15.01.2025 14:30 - Система проверена, все камеры работают</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">15.01.2025 12:15 - Камера 004 требует технического обслуживания</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Сохранение */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Save" size={20} />
                Сохранение данных
              </CardTitle>
              <CardDescription>Управление сохранением настроек системы мониторинга</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Сохранить и отправить
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Icon name="X" size={16} className="mr-2" />
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;