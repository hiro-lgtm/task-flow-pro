# 🚀 TaskFlow Pro - 企業経営改善専門家向けタスク管理システム

**完全機能統合型** タスク管理・プロジェクト管理システム

## 🎯 概要

企業経営改善の伴奏支援を行う専門家や監査役の方々のために開発された、包括的なタスク管理システムです。

- 📱 **PWA対応**: アプリのような使用感
- 🔥 **Firebase同期**: リアルタイムでデバイス間同期
- 🔐 **Google認証**: セキュアなログインシステム
- 📊 **高度な分析**: Chart.jsによる美しいデータ可視化
- ⏱️ **時間追跡**: 詳細な作業時間管理

## 🚀 クイックスタート

1. **index.html** をブラウザで開く
2. Firebase設定を完了
3. Google認証でログイン
4. タスク管理を開始！

## 📁 プロジェクト構成

```
TaskFlow Pro/
├── index.html                    # メインアプリケーション
├── manifest.json                 # PWA設定
├── docs/                        # 📚 ドキュメント
│   ├── README.md                 # 詳細な機能説明
│   ├── DEPLOYMENT.md            # デプロイメントガイド
│   ├── ARC-SETUP.md            # Arc Browser設定
│   └── FIREBASE-SETUP.md       # Firebase設定ガイド
└── config/                      # ⚙️ 設定ファイル
    └── firestore-security-rules.js  # Firestoreセキュリティルール
```

## 📚 ドキュメント

- **[機能詳細](docs/README.md)** - 全機能の詳細説明
- **[Firebase設定](docs/FIREBASE-SETUP.md)** - Firebase Consoleの設定方法
- **[Arc Browser対応](docs/ARC-SETUP.md)** - Arc Browserでの最適使用法
- **[デプロイメント](docs/DEPLOYMENT.md)** - 本番環境への展開方法

## ✨ 主要機能

### 📋 タスク管理
- 完全なCRUD操作
- サブタスク機能
- 優先度・ステータス管理
- 期限アラート

### 👥 顧客管理
- 顧客情報管理
- タスクとの関連付け
- 統計・分析機能

### 📊 レポート・分析
- ガントチャート表示
- Chart.jsによるデータ可視化
- 月別作業時間推移
- 進捗分析

### ⚙️ 高度な機能
- リアルタイム同期（Firebase）
- Google Calendar統合
- PWA対応
- デスクトップ通知
- データエクスポート/インポート

## 🛠️ 技術仕様

- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript
- **UI Framework**: Tailwind CSS
- **データ可視化**: Chart.js
- **認証**: Google OAuth2
- **データベース**: Firebase Firestore
- **ストレージ**: LocalStorage + Firebase

## 🎯 対象ユーザー

- 企業経営改善の専門家
- 監査役・コンサルタント
- プロジェクトマネージャー
- 個人事業主

---

**開発**: AI Assistant  
**最終更新**: 2025年1月8日