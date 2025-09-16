# 🔥 Firebase Console 詳細設定ガイド

## セキュア Firebase 設定手順

TaskFlow Pro では **セキュリティを重視**し、Anonymous認証を使用せずGoogle認証のみでFirebase接続を行います。

## 🛠️ Firebase Console 設定手順

### 1. Firebase Console にアクセス
1. [Firebase Console](https://console.firebase.google.com/) を開く
2. あなたのプロジェクトを選択

### 2. Authentication を有効化
1. 左サイドバーの **「Authentication」** をクリック
2. **「始める」** ボタンをクリック（まだ有効化していない場合）

### 3. Google 認証プロバイダーを設定 ⚠️ 重要
1. 同じ **「Sign-in method」** タブで
2. **「Google」** をクリック
3. **「有効にする」** をオンにする
4. **プロジェクトのサポートメール** を入力
5. **「保存」** をクリック

### 4. 承認済みドメインを追加
1. **「Settings」** タブをクリック
2. **「承認済みドメイン」** セクションを確認
3. 以下のドメインが含まれていることを確認：
   - `localhost`
   - あなたのデプロイ先ドメイン

不足している場合：
1. **「ドメインを追加」** をクリック
2. 必要なドメインを入力
3. **「追加」** をクリック

### 5. API Key と Project ID の確認
1. 左サイドバーの **⚙️（設定）** → **「プロジェクトの設定」** をクリック
2. **「全般」** タブで以下を確認：
   - **プロジェクト ID**（正確にコピー）
   - **ウェブ API キー**（AIza... で始まる文字列）

## 🎯 TaskFlow Pro での設定

上記の設定完了後：

1. **Firebase API Key** フィールドに ウェブ API キー を貼り付け
2. **Project ID** フィールドに プロジェクト ID を貼り付け
3. **「接続テスト」** をクリック
4. ✅ 成功後、**「設定保存」** をクリック

## ⚠️ よくあるエラーと対処法

### `auth/admin-restricted-operation`
- **原因**: Firebase Authentication の設定が不完全
- **解決**: 上記手順で Google 認証プロバイダーを設定

### `auth/invalid-api-key`
- **原因**: API Key が間違っている
- **解決**: Firebase Console でウェブ API キーを再確認

### `auth/project-not-found`
- **原因**: Project ID が間違っている
- **解決**: Firebase Console でプロジェクト ID を再確認

### `auth/unauthorized-domain`
- **原因**: 現在のドメインが承認されていない
- **解決**: 承認済みドメインに現在のドメインを追加

## 🔒 セキュリティ重視の接続テスト

TaskFlow Pro では **セキュリティリスクを排除**するため：

- ❌ **Anonymous認証は使用しません**
- ✅ **Firebase SDK初期化のみ**で接続確認
- ✅ **認証なし**での安全なテスト方式
- ✅ **Google認証専用**設計

## 🔄 設定後の確認

Firebase設定が正常に完了すると：
1. ✅ **接続テスト成功** メッセージが表示
2. 🔵 **「Googleでログイン」** ボタンが利用可能に
3. 🔥 **Firebase同期** が自動で有効化

---

📱 **Arc Browser ユーザー**: `docs/ARC-SETUP.md` も参照してください。
📚 **詳細情報**: `docs/DEPLOYMENT.md` でより詳しい設定方法を確認できます。