<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Cache;
use Mail;

class UserRegisterVerficationCode extends Notification
{
    use Queueable;

    /**
     * @var User
     */
    protected $user;

    /**
     * Create a new notification instance.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $code = str_random(191);
        $key = $this->user->email;
        $expiredAt = now()->addMinutes(30);
        // 缓存验证码 30分钟过期
        Cache::put($key, $code, $expiredAt);

        $url = request()->root() . '/#/register/confirmed?token=' . $code . '&from_user=' . $this->user->email;

        return (new MailMessage)
            ->subject('Cocoyo’Blog 消息提醒')
            ->greeting('Hi,' . $this->user->name . '')
            ->line('我们收到了你注册的申请，请点击下方按钮进行注册,30分钟内有效!')
            ->action('确认邮箱', $url)
            ->line('感谢您使用我们的应用程序!');
    }
}
