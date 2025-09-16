# Firebase Firestore セキュリティルール修正

## 現在のエラーの原因
- Missing or insufficient permissions
- 401 Unauthorized エラー

## 解決方法

### 1. Firebase Console へアクセス
1. https://console.firebase.google.com/
2. プロジェクト「curious-ocean-416413」を選択
3. 左メニュー「Firestore Database」をクリック
4. 「ルール」タブをクリック

### 2. ルールを以下に変更

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 認証済みユーザーが自分のデータのみアクセス可能
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 3. 公開ボタンをクリック

### 4. テスト用一時ルール（開発中のみ）
もし上記で解決しない場合、一時的に以下を使用：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ 注意: テスト用ルールは開発完了後に厳密なルールに戻してください

## 5. アプリケーション側の確認

以下も確認してください：
- Firebase API Key が正しいか
- Project ID が正しいか
- プロジェクトでFirestore Databaseが有効になっているか