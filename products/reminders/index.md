# 《点滴清单》

一个完整的生日提醒、节日提醒、闹钟、待办事项管理系统。

## 介绍

2026年寒假期间，由于从应用市场上下载的一些提醒、待办工具要么一堆花里胡哨功能，要么不满足我的需求，还老是提示我开会员交钱，烦死了。于是，我开始开发《点滴清单》。该项目的目标是创建一个功能完善的提醒管理系统，帮助用户管理和提醒重要事件。

经过一个多星期的开发，《点滴清单》的基本功能已经完善。目前，它支持用户注册登录、设置提醒、查看提醒、删除提醒等基本操作。

- Web端：支持PC端和移动端访问。 [https://todo.oddmeta.net](https://todo.oddmeta.net)
- 移动端：使用Android的WebView组件实现，支持Android系统。下载地址：[https://gitee.com/oddmeta/reminders/releases/tag/v1.0.1](https://gitee.com/oddmeta/reminders/releases/tag/v1.0.1)
- 桌面端：使用electron框架，支持Windows/macOS/Linux系统。下载地址：[https://gitee.com/oddmeta/reminders/releases/tag/v1.0.1](https://gitee.com/oddmeta/reminders/releases/tag/v1.0.1)

## 功能特性

- **多用户支持**: 基于Django用户系统，安全可靠
- **多种提醒类型**: 生日、节日、闹钟、待办事项
- **双日历支持**: 支持阳历和农历日期
- **灵活的循环规则**: 支持不循环、每日、每周、每月、每年重复
- **智能提醒算法**: 根据不同类型自动计算下次提醒时间
- **两种视图模式**: 日历视图（展示所有循环实例）和列表视图（合并显示提醒记录）
- **实时通知**: 支持定时检查和触发提醒
- **截止日期设置**: 可设置循环提醒的截止日期
- **详细的提醒规则**: 针对不同类型的提醒有专门的规则和行为

## 详细通知规则

### 1. 生日提醒
- **提前提醒**: 生日前3天开始提醒，每天早8点提醒一次
- **当天提醒**: 生日当天按设置时间提醒
- **过期处理**: 超过生日当天日期后，停止当前周期提醒
- **循环处理**: 若为循环提醒，将下次通知日期改为下一周期（下一年度）的生日日期
- **非循环处理**: 若为一次性提醒，在生日当天提醒后自动禁用

### 2. 节日提醒
- **提前提醒**: 节日前一天早8点提醒一次
- **当天提醒**: 节日当天早8点再次提醒
- **过期处理**: 节日当天提醒后结束当前周期
- **循环处理**: 若为循环提醒，将下次通知日期改为下一周期（下一年度）的节日日期
- **非循环处理**: 若为一次性提醒，在节日当天提醒后自动禁用

### 3. 待办提醒
- **提前提醒**: 待办时间前5分钟开始提醒
- **当天提醒**: 待办当天每6小时提醒一次，直到用户确认
- **过期处理**: 超过待办日期后，每天提醒一次，直到用户确认
- **确认处理**: 用户确认后，计算并更新下一周期时间
- **非循环处理**: 若为一次性提醒，用户确认后自动禁用

### 4. 闹钟提醒
- **按时提醒**: 按设置时间触发提醒
- **重复提醒**: 未确认时每5分钟重复触发，最多3次
- **过期处理**: 超过3次未确认，将下次触发时间更改为下一周期（明天同一时间）
- **循环处理**: 每天循环的闹钟，每天按设置时间触发
- **非循环处理**: 一次性闹钟触发后，若被确认则停止；若未确认则每5分钟重复，直到被确认或超过3次后停止

## 快速开始

### 1. 安装依赖
```bash
pip install djangorestframework lunardate pytz redis
```

### 2. 运行迁移
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. 创建测试数据
```bash
python manage.py create_test_data
```

### 4. 启动服务器
```bash
python manage.py runserver
```

### 5. 访问系统
- 主页: http://127.0.0.1:8000/
- 管理后台: http://127.0.0.1:8000/admin/
- 默认管理员: admin / admin123

## 定时任务配置

### 每分钟检查提醒
```bash
# Linux/macOS (添加到 crontab)
* * * * * cd /path/to/reminder_project && python manage.py check_reminders >> /var/log/reminders.log 2>&1

# Windows (使用任务计划程序)
python manage.py check_reminders
```

### 可选: 使用Redis集成
```bash
# 启动Redis服务器
redis-server

# 确保settings.py中配置了Redis
REDIS_HOST = 'localhost'
REDIS_PORT = 6379
REDIS_DB = 0
```

## API 使用

### 提醒操作

**获取所有提醒**:
```bash
GET /api/reminders/
```

**创建提醒**:
```bash
POST /api/reminders/
{
    "reminder_type": "birthday",
    "title": "爸爸生日",
    "calendar_type": "solar",
    "month": 6,
    "day": 15,
    "hour": 8,
    "minute": 0,
    "repeat_type": "yearly"
}
```

**获取待触发提醒**:
```bash
GET /api/reminders/pending/
```

**确认提醒**:
```bash
POST /api/reminders/{id}/confirm/
```

**推迟提醒**:
```bash
POST /api/reminders/{id}/snooze/
{"minutes": 10}
```

**获取统计信息**:
```bash
GET /api/reminders/statistics/
```

## 后台服务

### 管理命令

1. **检查并触发提醒**:
   ```bash
   python manage.py check_reminders
   ```

2. **更新所有提醒的下次提醒时间**:
   ```bash
   python manage.py update_reminders
   ```

3. **创建测试数据**:
   ```bash
   python manage.py create_test_data
   ```

4. **修复循环提醒的时间问题**:
   ```bash
   python manage.py fix_next_reminder_time
   ```

## 技术栈

- **后端**: Django 5.2, Django REST Framework
- **前端**: HTML5, Bootstrap 5, JavaScript, Axios
- **数据库**: SQLite (默认), 支持 MySQL/PostgreSQL
- **提醒计算**: lunardate (农历转换)
- **实时通知**: Redis (可选)
- **日志**: Python logging模块

## 项目结构

项目结构如下：

reminder_project/ 
├── reminder_project/ # 项目配置 
├── reminders/ # 提醒应用 
│ ├── models.py # 数据模型 
│ ├── serializers.py # API序列化器 
│ ├── views.py # API视图 
│ ├── urls.py # API路由 
│ └── management/ # 管理命令 
│ └── commands/ # 自定义命令 
├── frontend/ # 前端应用 
│ ├── templates/ # 模板文件 
│ ├── views.py # 视图函数 
│ └── urls.py # 路由 
├── logs/ # 日志目录 
└── README.md # 项目说明


## 开发说明

### 日志配置

日志配置在 `settings.py` 中，支持控制台输出和文件输出：

```python
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {filename}:{lineno} {process:d} {thread:d} {message}',
            'style': '{',
        },
    },
    # 其他配置...
}
```

### 定时任务

应用启动时会自动运行定时器，每分钟检查一次提醒：

```python
# reminders/apps.py
class RemindersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'reminders'
    
    def ready(self):
        if os.environ.get('RUN_MAIN') == 'true' or not settings.DEBUG:
            timer_thread = threading.Thread(target=self.RunScheduledtasksTimer, args=(60,), daemon=True)
            timer_thread.start()
```

## 许可证

MIT License