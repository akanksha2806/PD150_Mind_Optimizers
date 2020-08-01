package com.example.mind_optimizers_android_app;



import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;

public class MainActivity extends AppCompatActivity {

    private int SleepTimer = 3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_main);
        getSupportActionBar().hide();
        MainActivity.LogoLauncher logoLauncher = new MainActivity.LogoLauncher();
        logoLauncher.start();
    }
    private class LogoLauncher extends Thread{
        public void run()
        {
            try{
                sleep(1000*SleepTimer);
            }
            catch(InterruptedException e){

                e.printStackTrace();
            }
            Intent i=new Intent(MainActivity.this,LoginSignup.class);
            startActivity(i);
            MainActivity.this.finish();
        }

    }
}
