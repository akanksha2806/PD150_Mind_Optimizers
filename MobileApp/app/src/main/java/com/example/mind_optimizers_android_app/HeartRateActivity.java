package com.example.mind_optimizers_android_app;



import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.icu.util.Measure;
import android.os.Bundle;
import android.os.Handler;
import android.preference.PreferenceManager;
import android.view.View;
import android.widget.Button;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;
import java.util.concurrent.ThreadLocalRandom;


public class HeartRateActivity extends AppCompatActivity{

    @Override
    protected void onResume(){
        super.onResume();

        String number = PreferenceManager.getDefaultSharedPreferences(getApplicationContext()).getString("LAST_MEASURE", "0");
        if (number!="0") {

            TextView tv = (TextView) findViewById(R.id.number);
            tv.setText(number);

            RatingBar rb = (RatingBar) findViewById(R.id.ratingBar);
            tv = (TextView) findViewById(R.id.text);
            if (Double.parseDouble(number) > 90) {
                //Cosa mala
                rb.setRating(0);
                tv.setText("Your heart rate is to high");
            } else {
                //Cosa buena
                rb.setRating(1);
                tv.setText("Your heart rate is correct");
            }
        }

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_heart_rate);

        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, 0);
        }

        final Button button = (Button) findViewById(R.id.start);

        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {

                Intent intent;
                intent = new Intent(getApplicationContext(), com.example.mind_optimizers_android_app.Measure.class);
                startActivity(intent);
                final Integer randomNum = ThreadLocalRandom.current().nextInt(70, 90 + 1);
                final Handler handler = new Handler();
                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        // Do something after 5s = 5000ms
                        Toast.makeText(HeartRateActivity.this,randomNum.toString(),Toast.LENGTH_LONG).show();
                    }
                }, 5000);

            }
        });
    }
}