# CardSystemApplication

🌍 **Dil / Language:** [Türkçe](#-proje-amacı) | [English](#-project-purpose)

---

## 🎯 Proje Amacı
CardSystemApplication; kart bazlı işlem hareketleri, sipariş süreçleri ve aksiyon yönetimini mobil ortamda optimize etmek amacıyla tasarlanmış modern bir React Native uygulamasıdır. Kullanıcıların kart işlemlerini dinamik olarak takip edebilmesine, sipariş akışlarını görüntüleyip yönetebilmesine olanak tanıyan pratik ve kullanıcı dostu bir arayüz sunar.

Uygulama; Redux Toolkit tabanlı merkezi durum yönetimi ve modüler bileşen yapısı sayesinde veri akışını güvenilir, ölçeklenebilir ve performanslı bir biçimde işler. React Navigation entegrasyonu ile zenginleştirilmiş gezinme mimarisi, platformlar arası (iOS, Android, Web) akıcı bir kullanıcı deneyimi sağlar.

## 🛠️ Kullanılan Teknolojiler
- **Çekirdek:** React Native (v0.81), React (v19.1), Expo (SDK 54)
- **Programlama Dili:** TypeScript
- **Durum Yönetimi (State Management):** Redux Toolkit, React-Redux
- **Navigasyon:** React Navigation (Native Stack, Stack, Bottom Tabs)
- **HTTP İstemcisi:** Axios
- **Kullanıcı Arayüzü & Etkileşim:** React Native Safe Area Context, React Native Screens, React Native Gesture Handler, React Native Dropdown Picker

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayabilirsiniz:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/Merenylmz/CardSystemApplication.git

# 2. Proje dizinine gidin
cd CardSystemApplication

# 3. Bağımlılıkları yükleyin
npm install

# 4. Expo geliştirme sunucusunu başlatın
npm start
```

Platforma özel çalıştırma komutları:
```bash
# Android için
npm run android

# iOS için
npm run ios

# Web için
npm run web
```

## 📌 Ek Bilgiler ve Özellikler
- **Modüler Dizin Mimarisi:** Aksiyonlar (`components/Actions`), siparişler (`components/Orders`) ve genel UI elemanları (`components/UI`) ayrıştırılarak yeniden kullanılabilir bileşen yapısı hedeflenmiştir.
- **Uçtan Uca Tip Güvenliği:** TypeScript ve özel tip tanımlamaları (`types/`) ile çalışma zamanı hataları en aza indirilmiştir.
- **Merkezi Durum Yönetimi:** Asenkron veri akışları ve kullanıcı etkileşimleri `@reduxjs/toolkit` mimarisiyle (`store/`) senkronize şekilde yönetilmektedir.
- **Çoklu Platform Desteği:** Android ve iOS mobil platformlarının yanı sıra Expo altyapısı sayesinde web platformunda da çalıştırılabilir.

---

# CardSystemApplication (English)

## 🎯 Project Purpose
CardSystemApplication is a modern cross-platform mobile application engineered to streamline card-based transactions, order processing, and action tracking. It delivers an intuitive and responsive interface designed to handle user interactions and transaction workflows with high performance.

By leveraging Redux Toolkit for predictable state management and a modular component-driven architecture, the application ensures seamless synchronization of asynchronous data. Integrated with React Navigation, it delivers a smooth and cohesive user experience across iOS, Android, and Web platforms.

## 🛠️ Technologies Used
- **Core Frameworks:** React Native (v0.81), React (v19.1), Expo (SDK 54)
- **Language:** TypeScript
- **State Management:** Redux Toolkit, React-Redux
- **Routing & Navigation:** React Navigation (Native Stack, Stack, Bottom Tabs)
- **Networking:** Axios
- **UI & Gestures:** React Native Safe Area Context, React Native Screens, React Native Gesture Handler, React Native Dropdown Picker

## 🚀 Installation and Usage

Follow these steps to set up and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Merenylmz/CardSystemApplication.git

# 2. Navigate to the project directory
cd CardSystemApplication

# 3. Install dependencies
npm install

# 4. Start the Expo development server
npm start
```

Platform-specific execution commands:
```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## 📌 Additional Information & Features
- **Modular Architecture:** Well-structured project hierarchy containing domain-specific components (`components/Actions`, `components/Orders`, and reusable `components/UI`).
- **Strict Type Safety:** Comprehensive TypeScript integration (`types/`) ensuring robust development and predictable data structures.
- **Centralized State Layer:** Scalable and predictable global state management powered by Redux Toolkit slices (`store/`).
- **Cross-Platform Compatibility:** Native-first mobile performance for iOS and Android, with support for Expo Web environments.