#!/bin/bash
# 小吴游戏库 · 一键部署到 Cloudflare Pages
# 账号：0471666@gmail.com（首次使用先运行 `wrangler login` 授权）
# 用法：./deploy.sh "可选的提交说明"
set -e
cd "$(dirname "$0")"

if [ -n "$1" ]; then
  git add -A
  git commit -m "$1" || echo "（没有新的改动需要提交）"
  git push origin main
fi

wrangler pages deploy . --project-name=game --branch=main --commit-dirty=true
echo "🎉 线上地址：https://game-34j.pages.dev"
