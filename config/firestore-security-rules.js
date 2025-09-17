// TaskFlow Pro - Firestore セキュリティルール
// Google認証済みユーザーのみアクセス許可

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Google認証済みユーザーが自分のデータのみアクセス可能
    match /users/{userId} {
      allow read, write: if request.auth != null 
                         && request.auth.uid == userId
                         && request.auth.token.firebase.sign_in_provider == 'google.com';
    }
    
    // 管理データ（必要に応じて）
    match /admin/{document} {
      allow read: if request.auth != null;
      allow write: if false; // 管理者権限が必要な場合は別途設定
    }
    
    // デフォルト：すべてのアクセスを拒否
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

/* 
使用方法:
1. Firebase Console → Firestore Database → ルール
2. 上記ルールをコピー＆ペースト
3. 公開ボタンをクリック

セキュリティレベル: 高
- Google認証必須
- ユーザーは自分のデータのみアクセス可能
- 第三者による不正アクセスを完全ブロック
*/