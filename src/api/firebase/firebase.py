from firebase_admin import credentials, initialize_app, firestore, storage
from api.firebase.firebase_setting import FIREBASE_CONFIG, FIREBASE_STORAGE_BUCKET


cred = credentials.Certificate("firebase.json")
default_app = initialize_app(
    credential=cred,
    options={
        "storageBucket": FIREBASE_STORAGE_BUCKET,
    },
)


firebase_bucket = storage.bucket()


class FirebaseBucket:
    def __init__(self):
        self.bucket = firebase_bucket

    def upload_file(self, file, filename):
        blob = self.bucket.blob(filename)
        blob.upload_from_file(file)
        blob.make_public()
        return blob.public_url

    def delete_file(self, filename):
        blob = self.bucket.blob(filename)
        blob.delete()
        return True


Bucket = FirebaseBucket()
