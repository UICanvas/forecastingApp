# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/health || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
