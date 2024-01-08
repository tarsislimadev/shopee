FROM tmvdl/android:app

WORKDIR /app

RUN cordova create shopee com.brtmvdl.shopee shopee

WORKDIR /app/shopee

COPY app www

COPY cp.sh .

RUN cordova platform add android

RUN cordova build android
