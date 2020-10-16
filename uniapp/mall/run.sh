#!/bin/sh

prod_name=$(basename `pwd`)

############################################################
if [ "$1" = "dev" ] ; then
    mkdir -p ../../$prod_name/$1
    rm -rf ../../$prod_name/$1/*
    rm -rf $1

    npm run $1  
    mv $1 ../../$prod_name

elif [ "$1" = "prod" ] ; then
    mkdir -p ../../$prod_name/$1
    rm -rf ../../$prod_name/$1/*
    rm -rf $1

    npm run $1
    mv $1 ../../$prod_name

elif [ "$1" = "test" ]; then
    $BASE_DIR/sbin/ruijian_local -t $OPTIONS

else
    echo "usage: $0 dev|prod|test"
fi
