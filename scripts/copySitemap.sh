#!/bin/bash

# 定义环境变量
DIST_DIR="./dist"
OUTPUT_DIR="./.vercel/output/static"

# 获取当前时间（只保留时间）
current_time=$(date "+%H:%M:%S")

# 公共函数：打印带时间戳的消息
log_message() {
    echo "$current_time [script] $1"
}

# 检查源目录是否存在
if [ ! -d "$DIST_DIR" ]; then
    log_message "错误: $DIST_DIR 目录不存在"
    exit 1
fi

# 检查目标目录是否存在，如果不存在则创建
if [ ! -d "$OUTPUT_DIR" ]; then
    mkdir -p "$OUTPUT_DIR"
fi

# 复制文件
cp "$DIST_DIR"/sitemap-*.xml "$OUTPUT_DIR"/

# 检查复制是否成功
if [ $? -eq 0 ]; then
    log_message "站点地图文件复制成功"
else
    log_message "错误: 文件复制失败"
    exit 1
fi