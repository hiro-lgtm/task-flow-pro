# 🌐 Arc Browser 設定ガイド

TaskFlow Pro を Arc Browser で最適に使用するための詳細設定手順

## 🎯 Arc Browser での TaskFlow Pro 使用

Arc Browser は次世代ブラウザとして注目されていますが、従来のブラウザとは異なる特徴があります。TaskFlow Pro では Arc Browser での最適な動作を実現するため、特別な対応を実装しています。

## 🔥 Firebase 認証設定（Arc Browser対応）

### 1. Firebase Console 設定
1. [Firebase Console](https://console.firebase.google.com/) を開く
2. プロジェクト設定 → Authentication → Settings
3. **承認済みドメイン** に以下を追加：
   - `localhost` (開発用)
   - あなたのドメイン
   - **Arc Browser用**: `arc://` (必要に応じて)

### 2. Google認証の動作モード

TaskFlow Pro では Arc Browser での認証を確実にするため、**2段階認証方式**を採用：

#### 🔄 自動フォールバック機能
1. **Popup認証** を最初に試行
2. 失敗時は自動的に **Redirect認証** に切り替え
3. Arc Browser の制約に柔軟に対応

### 3. Arc Browser 固有の設定

#### ポップアップブロッカー設定
1. Arc Browser の設定を開く
2. **Privacy & Security** セクション
3. **ポップアップブロック** を TaskFlow Pro のドメインで無効化

#### Cookie と認証設定
1. サイト設定で JavaScript を有効化
2. Cookie の保存を許可
3. ローカルストレージへのアクセスを許可

## 🔧 トラブルシューティング

### Google認証が失敗する場合

#### 手順1: ドメイン確認
```
Firebase Console → Authentication → Settings → 承認済みドメイン
```
現在のドメインが登録されていることを確認

#### 手順2: ブラウザ設定確認
- ポップアップブロッカーの無効化
- Cookie の有効化
- JavaScript の有効化

#### 手順3: 強制更新
- **Cmd + Shift + R** (macOS) または **Ctrl + Shift + F5** (Windows)
- キャッシュをクリアして再読み込み

### Firebase 接続エラーの場合

#### よくあるエラーと対処法

**`auth/popup-blocked`**
- Arc Browser でポップアップブロックを無効化
- 自動的にリダイレクト認証に切り替わります

**`auth/cancelled-popup-request`**
- 認証ポップアップがキャンセルされました
- **確認**: Firebase設定を再保存
- 再度 Google認証を試行

**`auth/unauthorized-domain`**
- Firebase Console で現在のドメインを承認済みドメインに追加
- 設定後、5-10分待ってから再試行

## 🎨 Arc Browser 最適化機能

### UI/UX 最適化
- **タッチ操作対応**: Arc Browser のタッチジェスチャーに最適化
- **レスポンシブレイアウト**: Arc の独特なウィンドウ管理に対応
- **高DPI対応**: Retina ディスプレイでの美しい表示

### パフォーマンス最適化
- **メモリ使用量**: Arc Browser のメモリ管理に配慮
- **CPU使用率**: バックグラウンドタスクの最適化
- **バッテリー効率**: 省電力動作の実装

## 📱 PWA インストール (Arc Browser)

### インストール手順
1. TaskFlow Pro をArc Browserで開く
2. アドレスバー右端の **アプリインストール** アイコンをクリック
3. **「アプリを追加」** を選択
4. Arc Browserのアプリ一覧に TaskFlow Pro が追加されます

### PWA モードでの利点
- ✅ **独立ウィンドウ**: ブラウザタブから独立
- ✅ **高速起動**: ネイティブアプリのような起動速度
- ✅ **フルスクリーン**: 最大限の作業領域
- ✅ **通知対応**: デスクトップ通知の受信

## 🔄 データ同期確認

Arc Browser での Firebase データ同期を確認：

### 手順
1. TaskFlow Pro で Google認証完了
2. **設定** タブで **Firebase同期** を有効化
3. 他のブラウザ/デバイスでも同じアカウントでログイン
4. データが同期されていることを確認

### 同期対象データ
- ✅ すべてのタスク
- ✅ 顧客情報
- ✅ サブタスク
- ✅ 時間ログ
- ✅ アプリ設定

---

Arc Browser での TaskFlow Pro 使用で問題が発生した場合は、このガイドを参考に設定を確認してください。

**最終更新**: 2025年1月8日（Arc Browser v1.0対応）